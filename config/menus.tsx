import { MenuDataItem } from "@ant-design/pro-layout";
import { CrownOutlined } from "@ant-design/icons";

// 菜单列表
const menus = [
    {
        path: "/",
        name: "主页",
    },
    {
        path: "/banks",
        name: "题库",
    },
    {
        path: "/questions",
        name: "题目",
    },
    {
        path: "/admin",
        name: "管理",
        icon: <CrownOutlined />,
        children: [
            {
                path: "/admin/user",
                name: "用户管理",
            }
        ],
    },
] as MenuDataItem[];

// 导出
export default menus;
