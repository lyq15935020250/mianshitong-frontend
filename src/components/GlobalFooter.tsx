import React from "react";
import "./index.css";

export default function GlobalFooter (){
    const currentYear = new Date().getFullYear();

    return(
        <div className={"global-footer"}>
            <div>@ {currentYear} 面试通助你在求职路上快人一步</div>
            <div>
                <a target={"_blank"} href={"https://github.com/lyq15935020250?tab=repositories"}>
                    项目开源地址
                </a>
            </div>
        </div>
    );
}