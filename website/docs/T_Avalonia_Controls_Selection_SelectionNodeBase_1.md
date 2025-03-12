# SelectionNodeBase&lt;T&gt; Class


Base class for selection models.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Selection">Avalonia.Controls.Selection</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class SelectionNodeBase<T>

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class SelectionNodeBase(Of T)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type SelectionNodeBase<'T> = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Selection/SelectionNodeBase.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  SelectionNodeBase(T)</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Controls_Selection_SelectionModel_1">Avalonia.Controls.Selection.SelectionModel(T)</a></td></tr>
</table>



#### Type Parameters
<dl><dt /><dd>The type of the element being selected.</dd></dl>

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1__ctor">SelectionNodeBase(T)()</a></td>
<td>Initializes a new instance of the SelectionNodeBase(T) class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_Selection_SelectionNodeBase_1_ItemsView">ItemsView</a></td>
<td>Gets an <a href="T_Avalonia_Controls_ItemsSourceView_1">ItemsSourceView(T)</a> of the <a href="P_Avalonia_Controls_Selection_SelectionNodeBase_1_Source">Source</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Selection_SelectionNodeBase_1_RangesEnabled">RangesEnabled</a></td>
<td>Gets or sets a value indicating whether range selection is currently enabled for the selection node.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Selection_SelectionNodeBase_1_Source">Source</a></td>
<td>Gets or sets the source collection.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_CommitDeselect">CommitDeselect(Int32, Int32)</a></td>
<td>If <a href="P_Avalonia_Controls_Selection_SelectionNodeBase_1_RangesEnabled">RangesEnabled</a>, removes the specified range from the selection.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_CommitSelect">CommitSelect(Int32, Int32)</a></td>
<td>If <a href="P_Avalonia_Controls_Selection_SelectionNodeBase_1_RangesEnabled">RangesEnabled</a>, adds the specified range to the selection.</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnIndexesChanged">OnIndexesChanged(Int32, Int32)</a></td>
<td>Called by <a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnSourceCollectionChanged">OnSourceCollectionChanged(NotifyCollectionChangedEventArgs)</a>, detailing the indexes changed by the collection changing.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnItemsAdded">OnItemsAdded(Int32, IList)</a></td>
<td>Called by <a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnSourceCollectionChanged">OnSourceCollectionChanged(NotifyCollectionChangedEventArgs)</a> when items are added to the source collection.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnSelectionRemoved">OnSelectionRemoved(Int32, Int32, IReadOnlyList(T))</a></td>
<td>Called by <a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnSourceCollectionChanged">OnSourceCollectionChanged(NotifyCollectionChangedEventArgs)</a>, detailing the items removed by a collection change.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnSourceCollectionChanged">OnSourceCollectionChanged(NotifyCollectionChangedEventArgs)</a></td>
<td>Called when the <a href="P_Avalonia_Controls_Selection_SelectionNodeBase_1_Source">Source</a> collection changes.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnSourceCollectionChangeFinished">OnSourceCollectionChangeFinished()</a></td>
<td>Called when the source collection has finished changing, and all CollectionChanged handlers have run.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnSourceCollectionChangeStarted">OnSourceCollectionChangeStarted()</a></td>
<td>Called when the source collection starts changing.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnSourceReset">OnSourceReset()</a></td>
<td>Called by <a href="M_Avalonia_Controls_Selection_SelectionNodeBase_1_OnSourceCollectionChanged">OnSourceCollectionChanged(NotifyCollectionChangedEventArgs)</a>, on collection reset.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Selection">Avalonia.Controls.Selection Namespace</a>  

