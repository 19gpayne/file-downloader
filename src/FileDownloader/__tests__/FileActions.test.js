import { render, screen, within } from '@testing-library/react';
import FileActions from '../FileActions';

test('renders actions with all files selected', async () => {
  // GIVEN: files and selected are equal (meaning all selected)
  // AND: not all files are available
  const files = [{
    name: 'testfile.exe', 
    device: 'Test', 
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\testfile.exe', 
    status: 'available'
  }, {
    name: 'testfile1.exe', 
    device: 'Test1', 
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\testfile1.exe', 
    status: 'scheduled'
  }]
  const selected = new Set([{
    name: 'testfile.exe', 
    device: 'Test', 
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\testfile.exe', 
    status: 'available'
  }, {
    name: 'testfile1.exe', 
    device: 'Test1', 
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\testfile1.exe', 
    status: 'scheduled'
  }])

  // WHEN: we render the actions
  render(
    <table>
      <thead>
        <FileActions 
            selectedRows={selected}
            files={files}
            selectAll={() => {console.log("select all")}}
        />
      </thead>
    </table>
  );

  // THEN: checkbox displays as checked
  const checkbox = screen.getByTestId("checkbox");
  const icon = within(checkbox).getByTestId("check", {name: "check", size: "xl"})
  expect(icon).toBeInTheDocument();
  expect(icon).toHaveClass("blue-box")

  // AND: selected row count is accurate
  expect(screen.getByText("Selected 2")).toBeInTheDocument();

  // AND: download is prevented due to nonavailable file selected
  const button = screen.getByTestId("button");
  expect(button).toBeDisabled();
  expect(screen.getByText("Files must be available")).toBeInTheDocument();

});

test('renders actions with no files selected', async () => {
  // GIVEN: no files selected
  const files = [{
    name: 'testfile.exe', 
    device: 'Test', 
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\testfile.exe', 
    status: 'available'
  }, {
    name: 'testfile1.exe', 
    device: 'Test1', 
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\testfile1.exe', 
    status: 'scheduled'
  }]
  const selected = new Set()

  // WHEN: we render the actions
  render(
    <table>
      <thead>
        <FileActions 
            selectedRows={selected}
            files={files}
            selectAll={() => {console.log("select all")}}
        />
      </thead>
    </table>
  );

  // THEN: checkbox displays as empty
  const checkbox = screen.getByTestId("checkbox");
  const icon = within(checkbox).getByTestId("none", {name: "none", size: "xl"})
  expect(icon).toBeInTheDocument();

  // AND: selected row count is accurate
  expect(screen.getByText("None Selected")).toBeInTheDocument();

  // AND: download is prevented due to nothing selected
  const button = screen.getByTestId("button");
  expect(button).toBeDisabled();

});

test('renders actions with only available files selected', async () => {
  // GIVEN: files and selected are equal (meaning all selected)
  // AND: not all files are available
  const files = [{
    name: 'testfile.exe', 
    device: 'Test', 
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\testfile.exe', 
    status: 'available'
  }, {
    name: 'testfile1.exe', 
    device: 'Test1', 
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\testfile1.exe', 
    status: 'scheduled'
  }]
  const selected = new Set([{
    name: 'testfile.exe', 
    device: 'Test', 
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\testfile.exe', 
    status: 'available'
  }])

  // WHEN: we render the actions
  render(
    <table>
      <thead>
        <FileActions 
            selectedRows={selected}
            files={files}
            selectAll={() => {console.log("select all")}}
        />
      </thead>
    </table>
  );

  // THEN: checkbox displays as indeterminate
  const checkbox = screen.getByTestId("checkbox");
  const icon = within(checkbox).getByTestId("minus", {name: "minus", size: "xl"})
  expect(icon).toBeInTheDocument();
  expect(icon).toHaveClass("blue-box")

  // AND: selected row count is accurate
  expect(screen.getByText("Selected 1")).toBeInTheDocument();

  // AND: download is allowed
  const button = screen.getByTestId("button");
  expect(button).toBeEnabled();

});