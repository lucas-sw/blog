import { NICK_NAME } from "./info";


// 定义一个字符串枚举
export enum PATHS {
    SITE_HOME = "/",
    SITE_ABOUT = "/about",
    SITE_BLOG = "/blog",
}

// 使用枚举的键作为类型定义路径描述
export const PATHS_STRING: Record<PATHS, string> = {
    [PATHS.SITE_HOME]: "首页",
    [PATHS.SITE_ABOUT]: "关于",
    [PATHS.SITE_BLOG]: "博客",
};

export const PATH_DESCRIPTION_MAP: Record<PATHS, string> = {
    /** ************* SITE ****************** */
    [PATHS.SITE_HOME]: "首页",
    [PATHS.SITE_BLOG]: "这里记录了我的想法、文章，希望和大家一起交流～",
    [PATHS.SITE_ABOUT]: `叮～ 你有一份关于${NICK_NAME}的简介，请查收～`,
  };

