import { render, screen, within } from '@testing-library/react';
import FileRow from '../FileRow';

test('renders valid row with available status', () => {
    // GIVEN: valid file with available status
    const file = {
        name: 'testfile.exe', 
        device: 'Test', 
        path: '\\Device\\HarddiskVolume2\\Windows\\System32\\testfile.exe', 
        status: 'available'
    }
  
    // WHEN: we render the row
    render(
        <table>
            <tbody>
                <FileRow 
                    file={file}
                    selected={false}
                    select={() => {console.log("select")}}
                />
            </tbody>
        </table>
      
    );
  
    // THEN: the row exists
    const row = screen.getByRole('row')
    expect(row).toHaveClass('file-row')

    const cells = within(row).getAllByRole('cell')
    
    // AND: checkbox cell exists
    const checkBoxCell = cells[0]
    const checkBox = within(checkBoxCell).getByTestId('checkbox')
    const icon = within(checkBox).getByTestId("none", {name: "none", size: "xl"})
    expect(icon).toBeInTheDocument();

    // AND: name cell exists
    const nameCell = cells[1]
    expect(nameCell).toHaveTextContent("testfile.exe")

    // AND: device cell exists
    const deviceCell = cells[2]
    expect(deviceCell).toHaveTextContent("Test")

    // AND: path cell exists
    const pathCell = cells[3]
    expect(pathCell).toHaveTextContent("\\Device\\HarddiskVolume2\\Windows\\System32\\testfile.exe")

    // AND: status icon exists
    const statusIconCell = cells[4]
    const statusIcon = within(statusIconCell).getByTestId('status-indicator', {name: "circle"})
    expect(statusIcon).toBeInTheDocument();

    // AND: status is available
    const statusCell = cells[5]
    expect(statusCell).toHaveTextContent("Available")
  
});

test('renders valid row with nonavailable status', () => {
    // GIVEN: valid file with scheduled status
    const file = {
        name: 'testfile.exe', 
        device: 'Test', 
        path: '\\Device\\HarddiskVolume2\\Windows\\System32\\testfile.exe', 
        status: 'scheduled'
    }
  
    // WHEN: we render the row
    render(
        <table>
            <tbody>
                <FileRow 
                    file={file}
                    selected={false}
                    select={() => {console.log("select")}}
                />
            </tbody>
        </table>
      
    );
  
    // THEN: the row exists
    const row = screen.getByRole('row')
    expect(row).toHaveClass('file-row')

    const cells = within(row).getAllByRole('cell')
    
    // AND: checkbox cell exists
    const checkBoxCell = cells[0]
    const checkBox = within(checkBoxCell).getByTestId('checkbox')
    const icon = within(checkBox).getByTestId("none", {name: "none", size: "xl"})
    expect(icon).toBeInTheDocument();

    // AND: name cell exists
    const nameCell = cells[1]
    expect(nameCell).toHaveTextContent("testfile.exe")

    // AND: device cell exists
    const deviceCell = cells[2]
    expect(deviceCell).toHaveTextContent("Test")

    // AND: path cell exists
    const pathCell = cells[3]
    expect(pathCell).toHaveTextContent("\\Device\\HarddiskVolume2\\Windows\\System32\\testfile.exe")

    // AND: status icon does not exist
    const statusIconCell = cells[4]
    expect(statusIconCell).toContainHTML("")

    // AND: status is scheduled
    const statusCell = cells[5]
    expect(statusCell).toHaveTextContent("Scheduled")
  
});

test('renders row that is not selected', () => {
    // GIVEN: valid file
    const file = {
        name: 'testfile.exe', 
        device: 'Test', 
        path: '\\Device\\HarddiskVolume2\\Windows\\System32\\testfile.exe', 
        status: 'available'
    }

    // AND: row is not selected
    const selected = false;
  
    // WHEN: we render the row
    render(
        <table>
            <tbody>
                <FileRow 
                    file={file}
                    selected={selected}
                    select={() => {console.log("select")}}
                />
            </tbody>
        </table>
      
    );
  
    // THEN: the row exists
    const row = screen.getByRole('row')
    expect(row).toHaveClass('file-row')

    const cells = within(row).getAllByRole('cell')
    
    const checkBoxCell = cells[0]
    const checkBox = within(checkBoxCell).getByTestId('checkbox')
    const icon = within(checkBox).getByTestId("none", {name: "none", size: "xl"})
    expect(icon).toBeInTheDocument();
  
});

test('renders row that is selected', () => {
    // GIVEN: valid file
    const file = {
        name: 'testfile.exe', 
        device: 'Test', 
        path: '\\Device\\HarddiskVolume2\\Windows\\System32\\testfile.exe', 
        status: 'available'
    }

    // AND: row is selected
    const selected = true;
  
    // WHEN: we render the row
    render(
        <table>
            <tbody>
                <FileRow 
                    file={file}
                    selected={selected}
                    select={() => {console.log("select")}}
                />
            </tbody>
        </table>
      
    );
  
    // THEN: the row exists
    const row = screen.getByRole('row')
    expect(row).toHaveClass('file-row')
    expect(row).toHaveClass('selected-row')

    // AND: checkbox is checked
    const cells = within(row).getAllByRole('cell')
    const checkBoxCell = cells[0]
    const checkBox = within(checkBoxCell).getByTestId('checkbox')
    const icon = within(checkBox).getByTestId("check", {name: "check", size: "xl"})
    expect(icon).toBeInTheDocument();
  
});