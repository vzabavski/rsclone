import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { useState } from 'react';
import { 
    Button,
    IconButton,
    Hidden,
    Typography,
    } from '@material-ui/core';
import { Link, Route } from 'react-router-dom';
import { useHomeStyles } from '../pages/Home/theme';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import CreateIcon from '@material-ui/icons/Create';
import { ModalBlock } from './ModalBlock';
import { AddTweetForm } from './AddTweetForm';
import { selectUserData } from '../store/ducks/user/selectors';
import { useSelector } from 'react-redux';
import { UserSideProfile } from './UserSideProfile';

interface SidebarProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const Sidebar: React.FC<SidebarProps> = ({
    classes,
}: SidebarProps): React.ReactElement => {
    const [visibleAddTweet, setSetVisibleAddTweet] = useState<boolean>(false);
    const userData = useSelector(selectUserData);

    const handleClickOpenAddTweet = () => {
        setSetVisibleAddTweet(true);
    };

    const onCloseAddTweet = () => {
        setSetVisibleAddTweet(false);
    };

    return (
    <ul className={classes.sideMenuList}> 
        <li className={classes.sideMenuListItem}>
            <Link to='/home'>
            <IconButton className={classes.logo} aria-label='' color='primary'>
                <TwitterIcon  className={classes.logoIcon}/>
            </IconButton>
            </Link>
        </li>
        <li className={classes.sideMenuListItem}>
            <Link to='/home'>
                <div>
                    <HomeIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                            Главная
                        </Typography>
                    </Hidden>
                </div>
            </Link>
        </li>
        <li className={classes.sideMenuListItem}>
            <div>
                <SearchIcon  className={classes.sideMenuListItemIcon}/>
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                        Поиск
                    </Typography>
                </Hidden>
            </div>        
        </li>
        <li className={classes.sideMenuListItem}>
            <div>
                <NotificationsNoneIcon  className={classes.sideMenuListItemIcon}/>
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                        Уведомления
                    </Typography>
                </Hidden>
            </div>
        </li>
        <li className={classes.sideMenuListItem}>
            <div>
                <MailOutlineIcon className={classes.sideMenuListItemIcon}/>
                
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                        Сообщения
                    </Typography>
                </Hidden>
            </div>
        </li>
        <li className={classes.sideMenuListItem}>
            <div>
                <BookmarkBorderIcon  className={classes.sideMenuListItemIcon}/>
                
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                        Закладки
                    </Typography>
                </Hidden>
            </div>
        </li>
        <li className={classes.sideMenuListItem}>
            <div>
                <ListAltIcon  className={classes.sideMenuListItemIcon}/>
                
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                        Список
                    </Typography>
                </Hidden>
            </div>
        </li>
        <li className={classes.sideMenuListItem}>
            <Link to={`/user/${userData?._id}`}>
            <div>
                <PermIdentityOutlinedIcon  className={classes.sideMenuListItemIcon}/>
                
                <Hidden smDown>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                        Профиль
                    </Typography>
                </Hidden>
            </div>
            </Link>
        </li>
        <li className={classes.sideMenuListItem}>
            <Button 
                onClick={handleClickOpenAddTweet} 
                className={classes.sideMenuTweetBtn} 
                variant='contained' 
                color='primary' 
                fullWidth>
                <Hidden smDown>Твитнуть</Hidden> 
                <Hidden mdUp>
                    <CreateIcon />
                </Hidden>
            </Button>
            <ModalBlock title='' visible={visibleAddTweet} onClose={onCloseAddTweet}>
                <div style={{width: 500}}>
                    <AddTweetForm classes={classes} rowsMax={5} onClose={onCloseAddTweet}/> 
                </div>
            </ModalBlock>
            
        </li>
        <Route component={UserSideProfile} exact />
    </ul>         
    )
}
