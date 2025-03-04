import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# SelectionModel&lt;T&gt; Class




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Selection">Avalonia.Controls.Selection</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class SelectionModel<T> : SelectionNodeBase<T>, 
	ISelectionModel, INotifyPropertyChanged

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class SelectionModel(Of T)
	Inherits SelectionNodeBase(Of T)
	Implements ISelectionModel, INotifyPropertyChanged
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type SelectionModel<'T> = 
    class
        inherit SelectionNodeBase<'T>
        interface ISelectionModel
        interface INotifyPropertyChanged
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Selection/SelectionModel.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Controls_Selection_SelectionNodeBase_1">SelectionNodeBase</a>(T)  →  SelectionModel(T)</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_Selection_ISelectionModel">ISelectionModel</a>, <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged" target="_blank" rel="noopener noreferrer">INotifyPropertyChanged</a></td></tr>
</table>



#### Type Parameters
<dl><dt /><dd /></dl>

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionModel_1__ctor">SelectionModel(T)()</a></td>
<td>Initializes a new instance of the SelectionModel(T) class</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionModel_1__ctor_1">SelectionModel(T)(IEnumerable(T))</a></td>
<td>Initializes a new instance of the SelectionModel(T) class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_Selection_SelectionModel_1_AnchorIndex">AnchorIndex</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Selection_SelectionModel_1_Count">Count</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Selection_SelectionNodeBase_1_ItemsView">ItemsView</a></td>
<td>Gets an <a href="T_Avalonia_Controls_ItemsSourceView_1">ItemsSourceView(T)</a> of the <a href="P_Avalonia_Controls_Selection_SelectionNodeBase_1_Source">Source</a>.<br />(Inherited from <a href="T_Avalonia_Controls_Selection_SelectionNodeBase_1">SelectionNodeBase(T)</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Selection_SelectionNodeBase_1_RangesEnabled">RangesEnabled</a></td>
<td>Gets or sets a value indicating whether range selection is currently enabled for the selection node.<br />(Inherited from <a href="T_Avalonia_Controls_Selection_SelectionNodeBase_1">SelectionNodeBase(T)</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Selection_SelectionModel_1_SelectedIndex">SelectedIndex</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Selection_SelectionModel_1_SelectedIndexes">SelectedIndexes</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Selection_SelectionModel_1_SelectedItem">SelectedItem</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Selection_SelectionModel_1_SelectedItems">SelectedItems</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Selection_SelectionModel_1_SingleSelect">SingleSelect</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Selection_SelectionModel_1_Source">Source</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionModel_1_BatchUpdate">BatchUpdate()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionModel_1_BeginBatchUpdate">BeginBatchUpdate()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionModel_1_Clear">Clear()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_CommitDeselect">CommitDeselect(Int32, Int32)</a></td>
<td>If <a href="P_Avalonia_Controls_Selection_SelectionNodeBase_1_RangesEnabled">RangesEnabled</a>, removes the specified range from the selection.<br />(Inherited from <a href="T_Avalonia_Controls_Selection_SelectionNodeBase_1">SelectionNodeBase(T)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_CommitSelect">CommitSelect(Int32, Int32)</a></td>
<td>If <a href="P_Avalonia_Controls_Selection_SelectionNodeBase_1_RangesEnabled">RangesEnabled</a>, adds the specified range to the selection.<br />(Inherited from <a href="T_Avalonia_Controls_Selection_SelectionNodeBase_1">SelectionNodeBase(T)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionModel_1_Deselect">Deselect(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionModel_1_DeselectRange">DeselectRange(Int32, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionModel_1_EndBatchUpdate">EndBatchUpdate()</a></td>
<td> </td>
</tr>
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
<td><a href="M_Avalonia_Controls_Selection_SelectionModel_1_IsSelected">IsSelected(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionModel_1_OnIndexesChanged">OnIndexesChanged(Int32, Int32)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnIndexesChanged">SelectionNodeBase(T).OnIndexesChanged(Int32, Int32)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionModel_1_OnItemsAdded">OnItemsAdded(Int32, IList)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnItemsAdded">SelectionNodeBase(T).OnItemsAdded(Int32, IList)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionModel_1_OnSelectionRemoved">OnSelectionRemoved(Int32, Int32, IReadOnlyList(T))</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnSelectionRemoved">SelectionNodeBase(T).OnSelectionRemoved(Int32, Int32, IReadOnlyList(T))</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionModel_1_OnSourceCollectionChanged">OnSourceCollectionChanged(NotifyCollectionChangedEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnSourceCollectionChanged">SelectionNodeBase(T).OnSourceCollectionChanged(NotifyCollectionChangedEventArgs)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionModel_1_OnSourceCollectionChangeFinished">OnSourceCollectionChangeFinished()</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnSourceCollectionChangeFinished">SelectionNodeBase(T).OnSourceCollectionChangeFinished()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionModel_1_OnSourceCollectionChangeStarted">OnSourceCollectionChangeStarted()</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnSourceCollectionChangeStarted">SelectionNodeBase(T).OnSourceCollectionChangeStarted()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionModel_1_OnSourceReset">OnSourceReset()</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnSourceReset">SelectionNodeBase(T).OnSourceReset()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionModel_1_RaisePropertyChanged">RaisePropertyChanged(String)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionModel_1_Select">Select(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionModel_1_SelectAll">SelectAll()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionModel_1_SelectRange">SelectRange(Int32, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_Selection_SelectionModel_1_IndexesChanged">IndexesChanged</a></td>
<td> </td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Selection_SelectionModel_1_LostSelection">LostSelection</a></td>
<td> </td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Selection_SelectionModel_1_PropertyChanged">PropertyChanged</a></td>
<td> </td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Selection_SelectionModel_1_SelectionChanged">SelectionChanged</a></td>
<td> </td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_Selection_SelectionModel_1_SourceReset">SourceReset</a></td>
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
