import React, { Component } from 'react';
import { EuiIcon, EuiTreeView, } from '@elastic/eui';
import {Link} from 'react-router-dom';

export class TreeView extends Component {
    showAlert = () => {
        alert('You squashed a bug!');
      };
    
      render() {
        const items = [
          {
            label:<Link className='text-white' to='/studentDashboard'>Dashboard</Link>,
            id: 'dashboard',
            icon: <EuiIcon type="document" />,
          },
          {
            label: <Link className='text-white' to='/studentDashboard/subjects'>Subjects</Link>,
            id: 'subjects',
            icon: <EuiIcon type="document" />,
          },
          {
            label: <Link className='text-white' to='/studentDashboard/assignment'>Assignment</Link>,
            id: 'subjects',
            icon: <EuiIcon type="document" />,
          },
          {
            label: <Link className='text-white' to='/studentDashboard/test'>Test</Link>,
            id: 'subjects',
            icon: <EuiIcon type="document" />,
          },
          {
            label: 'Forum',
            id: 'forum',
            icon: <EuiIcon type="folderClosed" />,
            iconWhenExpanded: <EuiIcon type="folderOpen" />,
            isExpanded: false,
            children: [
              {
                label: <Link className='text-white' to='/studentDashboard/Forum'>Forum</Link>,
                id: 'forum',
                icon: <EuiIcon type="document" />,
              },
              {
                label: <Link className='text-white' to='/studentDashboard/generalforum'>General Forum</Link>,
                id: 'generalForum',
                icon: <EuiIcon type="document" />,
              },
              {
                label: <Link className='text-white' to='/studentDashboard/lessonforum'>Lesson Forum</Link>,
                id: 'lessonForum',
                icon: <EuiIcon type="document" />,
              },
            ],
          },
        ];
    
        return (
          <div className='sidebar' style={{ width: '13rem', height:'63rem'}}>
            <EuiTreeView items={items} style={{padding:'90px 20px', width:'13rem'}} className='fixed-top' aria-label="Sample Folder Tree" />
          </div>
        );
      }
    }

export default TreeView;
