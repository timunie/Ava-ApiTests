import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ISelectionItemProvider Interface


Exposes methods and properties to support access by a UI Automation client to individual, selectable child controls of containers that implement <a href="T_Avalonia_Automation_Provider_ISelectionProvider">ISelectionProvider</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface ISelectionItemProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface ISelectionItemProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ISelectionItemProvider = interface end
```
</TabItem>
</Tabs>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Automation_Provider_ISelectionItemProvider_IsSelected">IsSelected</a></td>
<td>Gets a value that indicates whether an item is selected.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Provider_ISelectionItemProvider_SelectionContainer">SelectionContainer</a></td>
<td>Gets the UI Automation provider that implements <a href="T_Avalonia_Automation_Provider_ISelectionProvider">ISelectionProvider</a> and acts as the container for the calling object.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Automation_Provider_ISelectionItemProvider_AddToSelection">AddToSelection</a></td>
<td>Adds the current element to the collection of selected items.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Provider_ISelectionItemProvider_RemoveFromSelection">RemoveFromSelection</a></td>
<td>Removes the current element from the collection of selected items.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Provider_ISelectionItemProvider_Select">Select</a></td>
<td>Clears any existing selection and then selects the current element.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider Namespace</a>  
