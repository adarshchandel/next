import React from "react";
import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "../helper/common";
const AUTH_ROUTES = [
    "/chat"
]

export default async function authGuard(req: NextRequest, res: NextResponse) {
    const url = req.nextUrl.clone();
    const localUser = getCurrentUser("")
    const isUserExist = typeof localUser === "object" ? !!Object.keys(localUser).length : false;

    console.log("isUserExist===", isUserExist)

    // console.log(url.pathname == "/chat")
    // if (AUTH_ROUTES.includes(url.pathname) && !isUserExist) {
    //     url.pathname = "/auth/login";
    //     return NextResponse.redirect(url)
    // }
};