import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import './index.less'
import Header from '../../components/header'

export default function index() {
    const { pathname } = useLocation()

    return (
        <>
            <Header></Header>
            <div className='summary_root'>
                <div className='position'>当前位置{pathname.includes('summary') ? '峰会概况' : '邀请函'}</div>
                <ul className='side_bar'>
                    <li><Link to="summary">峰会概况</Link></li>
                    <li><Link to="invitation">邀请函</Link></li>
                </ul>
                <div className='main'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}
