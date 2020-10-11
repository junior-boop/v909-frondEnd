import React from 'react';
import logo from './v909.jpg'
import './content.css'
import { NavLink, Link } from 'react-router-dom';

export default function NavBar(){
    if(window.screen.width <= 500){
        return(
            <div className = "nav"> 
                <div className = "container">
                    <Link to = '/'>
                        <div className ="logo">
                            <img src={logo} alt ="logo"/>
                        </div>
                    </Link>
                    <div className ="nav-block">
                        <ul className ="menu" >
                            <li><NavLink 
                                activeClassName = 'font-weight : 700'
                                to = '/'>Location</NavLink> </li>
                            <li><NavLink 
                                activeClassName = 'font-weight : 700'
                            to = "/achat">  Achat</NavLink> </li>
                        </ul>
                    </div>
                    <div className = 'contact'>
                        <Link to = '/contact'>
                            <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAiIGhlaWdodD0iNDAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTYuNDUsMjEuNWMwLC03LjQ1MTkgNy41OTgxLC0xNS4wNSAxNS4wNSwtMTUuMDVoMTI5YzcuNDUxOSwwIDE1LjA1LDcuNTk4MSAxNS4wNSwxNS4wNXYxMTEuOGMwLDcuNDUxOSAtNy41OTgxLDE1LjA1IC0xNS4wNSwxNS4wNWgtMTIxLjE3ODNsLTIyLjg3MTcsMTkuMDYxOXoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNMTUwLjUsOC42YzYuMjY5NCwwIDEyLjksNi42MzA2IDEyLjksMTIuOXYxMTEuOGMwLDYuMjY5NCAtNi42MzA2LDEyLjkgLTEyLjksMTIuOWgtMTIwLjRoLTEuNTU2NmwtMS4xOTU0LDAuOTk3NmwtMTguNzQ4LDE1LjYyMTl2LTE0MS4zMTk1YzAsLTYuMjY5NCA2LjYzMDYsLTEyLjkgMTIuOSwtMTIuOWgxMjlNMTUwLjUsNC4zaC0xMjljLTguNiwwIC0xNy4yLDguNiAtMTcuMiwxNy4ydjE1MC41bDI1LjgsLTIxLjVoMTIwLjRjOC42LDAgMTcuMiwtOC42IDE3LjIsLTE3LjJ2LTExMS44YzAsLTguNiAtOC42LC0xNy4yIC0xNy4yLC0xNy4yeiIgZmlsbD0iIzFhYmM5YyI+PC9wYXRoPjxwYXRoIGQ9Ik04NiwzMS4yMTM3Yy00LjAyNzcsMCAtNy4yOTI4LDMuMjY1MSAtNy4yOTI4LDcuMjkyOGMwLDQuMDI3NyAzLjI2NTEsNy4yOTI4IDcuMjkyOCw3LjI5MjhjNC4wMjc3LDAgNy4yOTI4LC0zLjI2NTEgNy4yOTI4LC03LjI5MjhjMCwtNC4wMjc3IC0zLjI2NTEsLTcuMjkyOCAtNy4yOTI4LC03LjI5Mjh6TTkwLjMsMTA3LjV2LTUxLjZoLTE3LjJ2OC42aDguNnY0M2gtOC42djguNmgyNS44di04LjZ6IiBmaWxsPSIjMWFiYzljIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div className = "nav"> 
                <div className = "container">
                    <Link to = '/'>
                        <div className ="logo">
                            <img src={logo} alt ="logo"/>
                        </div>
                    </Link>
                    <div className ="nav-block">
                        <ul className ="menu" >
                            <li><NavLink to = '/achat'> Achat</NavLink> </li>
                            <li><NavLink to = "/"> Locations</NavLink> </li>
                            <li><NavLink to = "/contact"> Contactez-nous</NavLink> </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}
