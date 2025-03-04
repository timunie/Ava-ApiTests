import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ISelectionAdapter Interface


Defines an item collection, selection members, and key handling for the selection adapter contained in the drop-down portion of an <a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox</a> control.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Utils">Avalonia.Controls.Utils</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface ISelectionAdapter
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface ISelectionAdapter
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ISelectionAdapter = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Utils/ISelectionAdapter.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_Utils_ISelectionAdapter_ItemsSource">ItemsSource</a></td>
<td>Gets or sets a collection that is used to generate content for the selection adapter.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Utils_ISelectionAdapter_SelectedItem">SelectedItem</a></td>
<td>Gets or sets the selected item.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Utils_ISelectionAdapter_HandleKeyDown">HandleKeyDown(KeyEventArgs)</a></td>
<td>Provides handling for the KeyDown event that occurs when a key is pressed while the drop-down portion of the <a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox</a> has focus.</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_Utils_ISelectionAdapter_Cancel">Cancel</a></td>
<td>Occurs when a selection has been canceled.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Utils_ISelectionAdapter_Commit">Commit</a></td>
<td>Occurs when a selected item is not cancelled and is committed as the selected item.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Utils_ISelectionAdapter_SelectionChanged">SelectionChanged</a></td>
<td>Occurs when the <a href="P_Avalonia_Controls_Utils_ISelectionAdapter_SelectedItem">SelectedItem</a> property value changes.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Utils">Avalonia.Controls.Utils Namespace</a>  
