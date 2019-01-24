package org.hswebframework.iot.user.config;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.binary.Base64;
import org.hswebframework.web.ThreadLocalUtils;
import org.hswebframework.web.authorization.basic.web.AuthorizedToken;
import org.hswebframework.web.authorization.basic.web.ParsedToken;
import org.hswebframework.web.authorization.basic.web.UserTokenForTypeParser;
import org.hswebframework.web.authorization.token.TokenState;
import org.hswebframework.web.authorization.token.UserToken;
import org.hswebframework.web.authorization.token.UserTokenManager;
import org.hswebframework.web.entity.authorization.UserEntity;
import org.hswebframework.web.service.authorization.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

/**
 * 服务间调用的认证方式,使用basic进行认证
 *
 * @author zhouhao
 * @since 1.0
 */
@Slf4j
@Component
public class MicroServiceTokenParser implements UserTokenForTypeParser {

    @Autowired
    private UserService userService;

    @Autowired
    private UserTokenManager userTokenManager;

    @Override
    public ParsedToken parseToken(HttpServletRequest request) {
        ThreadLocalUtils.put("request-id",request.getHeader("request-id"));

        String authorization = request.getHeader("Authorization");
        if (authorization == null) {
            return null;
        }
        if (authorization.contains(" ")) {
            String[] info = authorization.split("[ ]");
            if (info[0].equalsIgnoreCase(getTokenType())) {
                authorization = info[1];
            }
        }
        try {
            String usernameAndPassword = new String(Base64.decodeBase64(authorization));
            UserToken token = userTokenManager.getByToken(usernameAndPassword);
            if (token != null && !token.isExpired()) {
                userTokenManager.changeTokenState(token.getToken(), TokenState.normal);
                return new ParsedToken() {
                    @Override
                    public String getToken() {
                        return usernameAndPassword;
                    }

                    @Override
                    public String getType() {
                        return getTokenType();
                    }
                };
            }
            if (usernameAndPassword.contains(":")) {
                String[] arr = usernameAndPassword.split("[:]");
                UserEntity user = userService.selectByUserNameAndPassword(arr[0], arr[1]);
                if (user != null) {
                    return new AuthorizedToken() {
                        @Override
                        public String getUserId() {
                            return user.getId();
                        }

                        @Override
                        public String getToken() {
                            return usernameAndPassword;
                        }

                        @Override
                        public String getType() {
                            return getTokenType();
                        }

                        @Override
                        public long getMaxInactiveInterval() {
                            //60分钟有效期
                            return 60 * 60 * 1000L;
                        }
                    };
                }
            }
        } catch (Exception e) {
            return null;
        }

        return null;
    }

    @Override
    public String getTokenType() {
        return "iot-cloud-basic";
    }

}
