import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ISelectionModel Interface




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Selection">Avalonia.Controls.Selection</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface ISelectionModel : INotifyPropertyChanged
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface ISelectionModel
	Inherits INotifyPropertyChanged
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ISelectionModel = 
    interface
        interface INotifyPropertyChanged
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Selection/ISelectionModel.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged" target="_blank" rel="noopener noreferrer">INotifyPropertyChanged</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_Selection_ISelectionModel_AnchorIndex">AnchorIndex</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Selection_ISelectionModel_Count">Count</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Selection_ISelectionModel_SelectedIndex">SelectedIndex</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Selection_ISelectionModel_SelectedIndexes">SelectedIndexes</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Selection_ISelectionModel_SelectedItem">SelectedItem</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Selection_ISelectionModel_SelectedItems">SelectedItems</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Selection_ISelectionModel_SingleSelect">SingleSelect</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Selection_ISelectionModel_Source">Source</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Selection_ISelectionModel_BeginBatchUpdate">BeginBatchUpdate()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_ISelectionModel_Clear">Clear()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_ISelectionModel_Deselect">Deselect(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_ISelectionModel_DeselectRange">DeselectRange(Int32, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_ISelectionModel_EndBatchUpdate">EndBatchUpdate()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_ISelectionModel_IsSelected">IsSelected(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_ISelectionModel_Select">Select(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_ISelectionModel_SelectAll">SelectAll()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_ISelectionModel_SelectRange">SelectRange(Int32, Int32)</a></td>
<td> </td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_Selection_ISelectionModel_IndexesChanged">IndexesChanged</a></td>
<td> </td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Selection_ISelectionModel_LostSelection">LostSelection</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged.propertychanged" target="_blank" rel="noopener noreferrer">PropertyChanged</a></td>
<td>Occurs when a property value changes.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged" target="_blank" rel="noopener noreferrer">INotifyPropertyChanged</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Selection_ISelectionModel_SelectionChanged">SelectionChanged</a></td>
<td> </td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Selection_ISelectionModel_SourceReset">SourceReset</a></td>
<td> </td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionModelExtensions_BatchUpdate">BatchUpdate()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_Selection_SelectionModelExtensions">SelectionModelExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Selection">Avalonia.Controls.Selection Namespace</a>  
