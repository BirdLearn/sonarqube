/*
 * SonarQube
 * Copyright (C) 2009-2018 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import LineIssuesList from '../LineIssuesList';
import { Issue, IssueType } from '../../../../app/types';

const issueBase: Issue = {
  component: '',
  componentLongName: '',
  componentQualifier: '',
  componentUuid: '',
  creationDate: '',
  key: '',
  flows: [],
  fromHotspot: false,
  message: '',
  organization: '',
  project: '',
  projectName: '',
  projectOrganization: '',
  projectKey: '',
  rule: '',
  ruleName: '',
  secondaryLocations: [],
  severity: '',
  status: '',
  type: IssueType.Bug
};

it('render issues list', () => {
  const issues: Issue[] = [{ ...issueBase, key: 'foo' }, { ...issueBase, key: 'bar' }];
  const onIssueClick = jest.fn();
  const wrapper = shallow(
    <LineIssuesList
      branchLike={undefined}
      issuePopup={undefined}
      issues={issues}
      onIssueChange={jest.fn()}
      onIssueClick={onIssueClick}
      onIssuePopupToggle={jest.fn()}
      selectedIssue="foo"
    />
  );
  expect(wrapper).toMatchSnapshot();
});
