﻿/*
 * Copyright 2016 http://www.hswebframework.org
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */
//组件信息
var info = {
    groupId: "org.hswebframework.iot",
    artifactId: "user-server",
    version: "1.0-SNAPSHOT",
    website: "https://github.com/hs-web/hsweb-iot-cloud",
    author: "admin@hsweb.me",
    comment: "用户服务"
};
var menus = [
    {
        "u_id": "e9dc96d6b677cbae865670e6813f5e8b",
        "name": "系统设置",
        "parent_id": "-1",
        "permission_id": "",
        "path": "sOrB",
        "sort_index": 1,
        "describe": " ",
        "url": "",
        "icon": "fa fa-cogs",
        "status": 1
    },
    {
        "u_id": "f84b8dacb3ea07ecd811cfb869137b90",
        "name": "首页设置",
        "parent_id": "e9dc96d6b677cbae865670e6813f5e8b",
        "permission_id": "dashboard",
        "path": "sOrB-JOQv",
        "sort_index": 101,
        "describe": null,
        "url": "admin/dashboard/list.html",
        "icon": "fa fa-dashboard",
        "status": 1
    },
    {
        "u_id": "8db17b9ba28dd949c926b329af477a08",
        "name": "菜单管理",
        "parent_id": "e9dc96d6b677cbae865670e6813f5e8b",
        "permission_id": "menu",
        "path": "sOrB-i2ea",
        "sort_index": 102,
        "describe": null,
        "url": "admin/menu/list.html",
        "icon": "fa fa-navicon",
        "status": 1
    },
    {
        "u_id": "a52df62b69e21fd756523faf8f0bd986",
        "name": "权限管理",
        "parent_id": "e9dc96d6b677cbae865670e6813f5e8b",
        "permission_id": "permission,autz-setting",
        "path": "sOrB-X27v",
        "sort_index": 103,
        "describe": null,
        "url": "admin/permission/list.html",
        "icon": "fa fa-briefcase",
        "status": 1
    },
    {
        "u_id": "42fc4f83d12cc172e4690937eb15752a",
        "name": "角色管理",
        "parent_id": "e9dc96d6b677cbae865670e6813f5e8b",
        "permission_id": "role",
        "path": "sOrB-4ofL",
        "sort_index": 104,
        "describe": null,
        "url": "admin/role/list.html",
        "icon": "fa fa-users",
        "status": 1
    },
    {
        "u_id": "58eba1a4371dd3c0da24fac5da8cadc2",
        "name": "用户管理",
        "parent_id": "e9dc96d6b677cbae865670e6813f5e8b",
        "permission_id": "user",
        "path": "sOrB-Dz7b",
        "sort_index": 105,
        "describe": null,
        "url": "admin/user/list.html",
        "icon": "fa fa-user",
        "status": 1
    },
    {
        "u_id": "org-01",
        "name": "组织架构",
        "parent_id": "-1",
        "permission_id": "",
        "path": "a2o0",
        "sort_index": 2,
        "describe": " ",
        "url": "",
        "icon": "fa fa-sitemap",
        "status": 1
    },
    {
        "u_id": "org-01-01",
        "name": "机构管理",
        "parent_id": "org-01",
        "permission_id": "organizational",
        "path": "a2o0-iL0F",
        "sort_index": 201,
        "describe": null,
        "url": "admin/org/list.html",
        "icon": "fa fa-leaf",
        "status": 1
    },
    {
        "u_id": "org-01-02",
        "name": "综合设置",
        "parent_id": "org-01",
        "permission_id": "organizational,department,position,person",
        "path": "a2o0-A12e",
        "sort_index": 202,
        "describe": null,
        "url": "admin/org/manager/index.html",
        "icon": "fa fa-sitemap",
        "status": 1
    },
    {
        "u_id": "dev-01",
        "name": "开发人员工具",
        "parent_id": "-1",
        "permission_id": "",
        "path": "d010",
        "sort_index": 3,
        "describe": " ",
        "url": "",
        "icon": "fa fa-th-list",
        "status": 1
    },
    {
        "u_id": "code-gen",
        "name": "代码生成器",
        "parent_id": "dev-01",
        "permission_id": "file,database-manager,datasource",
        "path": "d010-jG1V",
        "sort_index": 301,
        "describe": null,
        "url": "admin/code-generator/index.html",
        "icon": "fa fa-desktop",
        "status": 1
    },
    {
        "u_id": "d9b7a672a63d214a1f063bbbacab89ee",
        "name": "人员管理",
        "parent_id": "org-01",
        "permission_id": "person",
        "path": "a2o0-vfXJ",
        "sort_index": 203,
        "describe": null,
        "url": "admin/org/person/list.html",
        "icon": "fa fa-vcard",
        "status": 1
    }
];
var user = [
    {
        "u_id": org.hswebframework.web.id.IDGenerator.MD5.generate(),
        "name": "超级管理员",
        "username": "admin",
        "password": "ba7a97be0609c22fa1d300691dfcd790",
        "salt": "HX8Hr5Yd",
        "status": 1,
        "last_login_ip": null,
        "last_login_time": null,
        "creator_id": "admin",
        "create_time": 1497160610259
    },
    {
        "u_id": org.hswebframework.web.id.IDGenerator.MD5.generate(),
        "name": "网关服务用户",
        "username": "gateway-server",
        "password": "ba7a97be0609c22fa1d300691dfcd790",
        "salt": "HX8Hr5Yd",
        "status": 1,
        "last_login_ip": null,
        "last_login_time": null,
        "creator_id": "admin",
        "create_time": 1497160610259
    }
];

var autz_setting = [
    {
        "u_id": org.hswebframework.web.id.IDGenerator.MD5.generate(),
        "type": "user",
        "setting_for": user[0].u_id,
        "describe": null,
        "status": 1
    }
];
var autz_menu = [];
menus.forEach(function (menu) {
    autz_menu.push({
        u_id: org.hswebframework.web.id.IDGenerator.MD5.generate(),
        parent_id: "-1",
        menu_id: menu.u_id,
        status: 1,
        "setting_id": autz_setting[0].u_id,
        "path": "-"
    });
});
//版本更新信息
var versions = [
    // {
    //     version: "3.0.0",
    //     upgrade: function (context) {
    //         java.lang.System.out.println("更新到3.0.2了");
    //     }
    // }
];
var JDBCType = java.sql.JDBCType;

function install(context) {
    var database = context.database;

}

function initialize(context) {
    var database = context.database;
    database.getTable("s_menu").createInsert().values(menus).exec();
    database.getTable("s_autz_setting").createInsert().values(autz_setting).exec();
    database.getTable("s_autz_menu").createInsert().values(autz_menu).exec();
    database.getTable("s_user").createInsert().values(user).exec();
}

//设置依赖
dependency.setup(info)
    .onInstall(install)
    .onUpgrade(function (context) { //更新时执行
        var upgrader = context.upgrader;
        upgrader.filter(versions)
            .upgrade(function (newVer) {
                newVer.upgrade(context);
            });
    })
    .onUninstall(function (context) { //卸载时执行

    }).onInitialize(initialize);