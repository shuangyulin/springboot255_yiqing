const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型信息",
                        "menuJump":"列表",
                        "tableName":"dictionaryGonggao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"检测点信息",
                        "menuJump":"列表",
                        "tableName":"dictionaryJiancedian"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"所属社区信息",
                        "menuJump":"列表",
                        "tableName":"dictionaryShequ"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"疫苗公司信息",
                        "menuJump":"列表",
                        "tableName":"dictionaryYimiaogongsi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"疫情信息类型信息",
                        "menuJump":"列表",
                        "tableName":"dictionaryYiqingxinxi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"第几针信息",
                        "menuJump":"列表",
                        "tableName":"dictionaryZhen"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"职位信息",
                        "menuJump":"列表",
                        "tableName":"dictionaryZhiwei"
                    }
                ],
                "menu":"基础数据信息"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"地区信息",
                        "menuJump":"列表",
                        "tableName":"diqu"
                    }
                ],
                "menu":"地区信息"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告信息",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
					,
					{
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"疫情信息信息",
                        "menuJump":"列表",
                        "tableName":"yiqingxinxi"
                    }
                ],
                "menu":"公告和疫情信息信息"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"核酸预约信息",
                        "menuJump":"列表",
                        "tableName":"hesuanyuyue"
                    }
					,
					{
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"疫苗预约信息",
                        "menuJump":"列表",
                        "tableName":"yimiaoyuyue"
                    }
                ],
                "menu":"预约信息"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"社区管控信息",
                        "menuJump":"列表",
                        "tableName":"shequguankong"
                    }
                ],
                "menu":"社区管控信息"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"地区疫情每日信息",
                        "menuJump":"列表",
                        "tableName":"diquyiqingmeiriguanli"
                    }
                ],
                "menu":"地区疫情每日信息"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户信息",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
					,
					{
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"打卡信息",
                        "menuJump":"列表",
                        "tableName":"daka"
                    }
					,
					{
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户行程信息",
                        "menuJump":"列表",
                        "tableName":"yonghuxingcheng"
                    }
                ],
                "menu":"用户信息"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"社区信息员信息",
                        "menuJump":"列表",
                        "tableName":"shequguanliyuan"
                    }
                ],
                "menu":"社区信息员信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"地区信息",
                        "menuJump":"列表",
                        "tableName":"diqu"
                    }
                ],
                "menu":"地区信息"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告信息",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
					,
					{
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"疫情信息信息",
                        "menuJump":"列表",
                        "tableName":"yiqingxinxi"
                    }
                ],
                "menu":"公告和疫情信息信息"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"核酸预约信息",
                        "menuJump":"列表",
                        "tableName":"hesuanyuyue"
                    }
					,
					{
                        "buttons":[
                            "查看"
                        ],
                        "menu":"疫苗预约信息",
                        "menuJump":"列表",
                        "tableName":"yimiaoyuyue"
                    }
                ],
                "menu":"预约信息"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"社区管控信息",
                        "menuJump":"列表",
                        "tableName":"shequguankong"
                    }
                ],
                "menu":"社区管控信息"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"地区疫情每日信息",
                        "menuJump":"列表",
                        "tableName":"diquyiqingmeiriguanli"
                    }
                ],
                "menu":"地区疫情每日信息"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"用户信息",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
					,
					{
                        "buttons":[
                            "查看"
                        ],
                        "menu":"打卡信息",
                        "menuJump":"列表",
                        "tableName":"daka"
                    }
					,
					{
                        "buttons":[
                            "查看"
                        ],
                        "menu":"用户行程信息",
                        "menuJump":"列表",
                        "tableName":"yonghuxingcheng"
                    }
                ],
                "menu":"用户信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"社区管理员",
        "tableName":"shequguanliyuan"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"地区信息",
                        "menuJump":"列表",
                        "tableName":"diqu"
                    }
                ],
                "menu":"地区信息"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告信息",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
					,
					{
                        "buttons":[
                            "查看"
                        ],
                        "menu":"疫情信息信息",
                        "menuJump":"列表",
                        "tableName":"yiqingxinxi"
                    }
                ],
                "menu":"公告和疫情信息信息"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增"
                        ],
                        "menu":"核酸预约信息",
                        "menuJump":"列表",
                        "tableName":"hesuanyuyue"
                    }
					,
					{
                        "buttons":[
                            "查看",
                            "新增"
                        ],
                        "menu":"疫苗预约信息",
                        "menuJump":"列表",
                        "tableName":"yimiaoyuyue"
                    }
                ],
                "menu":"预约信息"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"社区管控信息",
                        "menuJump":"列表",
                        "tableName":"shequguankong"
                    }
                ],
                "menu":"社区管控信息"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"地区疫情每日信息",
                        "menuJump":"列表",
                        "tableName":"diquyiqingmeiriguanli"
                    }
                ],
                "menu":"地区疫情每日信息"
            }
            ,{
                "child":[
					{
                        "buttons":[
                            "查看",
                            "新增"
                        ],
                        "menu":"打卡信息",
                        "menuJump":"列表",
                        "tableName":"daka"
                    }
					,
					{
                        "buttons":[
                            "查看",
                            "新增",
                            "修改"
                        ],
                        "menu":"用户行程信息",
                        "menuJump":"列表",
                        "tableName":"yonghuxingcheng"
                    }
                ],
                "menu":"用户信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]
    }
}
export default menu;
