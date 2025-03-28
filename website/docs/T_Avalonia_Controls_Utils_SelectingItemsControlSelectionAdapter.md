# SelectingItemsControlSelectionAdapter Class


Represents the selection adapter contained in the drop-down portion of an <a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox</a> control.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Utils">Avalonia.Controls.Utils</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class SelectingItemsControlSelectionAdapter : ISelectionAdapter
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class SelectingItemsControlSelectionAdapter
	Implements ISelectionAdapter
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type SelectingItemsControlSelectionAdapter = 
    class
        interface ISelectionAdapter
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Utils/SelectingItemsControlSelectionAdapter.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  SelectingItemsControlSelectionAdapter</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_Utils_ISelectionAdapter">ISelectionAdapter</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Utils_SelectingItemsControlSelectionAdapter__ctor">SelectingItemsControlSelectionAdapter()</a></td>
<td>Initializes a new instance of the SelectingItemsControlSelectionAdapter class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Utils_SelectingItemsControlSelectionAdapter__ctor_1">SelectingItemsControlSelectionAdapter(SelectingItemsControl)</a></td>
<td>Initializes a new instance of the SelectingItemsControlSelectionAdapterr class with the specified <a href="T_Avalonia_Controls_Primitives_SelectingItemsControl">SelectingItemsControl</a> control.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_Utils_SelectingItemsControlSelectionAdapter_ItemsSource">ItemsSource</a></td>
<td>Gets or sets a collection that is used to generate the content of the selection adapter.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Utils_SelectingItemsControlSelectionAdapter_SelectedItem">SelectedItem</a></td>
<td>Gets or sets the selected item of the selection adapter.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Utils_SelectingItemsControlSelectionAdapter_SelectorControl">SelectorControl</a></td>
<td>Gets or sets the underlying <a href="T_Avalonia_Controls_Primitives_SelectingItemsControl">SelectingItemsControl</a> control.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Utils_SelectingItemsControlSelectionAdapter_HandleKeyDown">HandleKeyDown(KeyEventArgs)</a></td>
<td>Provides handling for the <a href="E_Avalonia_Input_InputElement_KeyDown">KeyDown</a> event that occurs when a key is pressed while the drop-down portion of the <a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox</a> has focus.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Utils_SelectingItemsControlSelectionAdapter_OnCancel">OnCancel()</a></td>
<td>Raises the <a href="E_Avalonia_Controls_Utils_SelectingItemsControlSelectionAdapter_Cancel">Cancel</a> event.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Utils_SelectingItemsControlSelectionAdapter_OnCommit">OnCommit()</a></td>
<td>Raises the <a href="E_Avalonia_Controls_Utils_SelectingItemsControlSelectionAdapter_Commit">Commit</a> event.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Utils_SelectingItemsControlSelectionAdapter_SelectedIndexDecrement">SelectedIndexDecrement()</a></td>
<td>Decrements the <a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedIndex">SelectedIndex</a> property of the underlying <a href="T_Avalonia_Controls_Primitives_SelectingItemsControl">SelectingItemsControl</a> control.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Utils_SelectingItemsControlSelectionAdapter_SelectedIndexIncrement">SelectedIndexIncrement()</a></td>
<td>Increments the <a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedIndex">SelectedIndex</a> property of the underlying <a href="T_Avalonia_Controls_Primitives_SelectingItemsControl">SelectingItemsControl</a> control.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_Utils_SelectingItemsControlSelectionAdapter_Cancel">Cancel</a></td>
<td>Occurs when a selection is canceled before it is committed.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Utils_SelectingItemsControlSelectionAdapter_Commit">Commit</a></td>
<td>Occurs when an item is selected and is committed to the underlying <a href="T_Avalonia_Controls_Primitives_SelectingItemsControl">SelectingItemsControl</a> control.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Utils_SelectingItemsControlSelectionAdapter_SelectionChanged">SelectionChanged</a></td>
<td>Occurs when the <a href="P_Avalonia_Controls_Utils_SelectingItemsControlSelectionAdapter_SelectedItem">SelectedItem</a> property value changes.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Utils">Avalonia.Controls.Utils Namespace</a>  

