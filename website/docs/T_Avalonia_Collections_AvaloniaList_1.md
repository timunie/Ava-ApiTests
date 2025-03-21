# AvaloniaList&lt;T&gt; Class


A notifying list.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class AvaloniaList<T> : IAvaloniaList<T>, 
	IList<T>, ICollection<T>, IEnumerable<T>, IEnumerable, IAvaloniaReadOnlyList<T>, 
	IReadOnlyList<T>, IReadOnlyCollection<T>, INotifyCollectionChanged, INotifyPropertyChanged, IList, 
	ICollection

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class AvaloniaList(Of T)
	Implements IAvaloniaList(Of T), IList(Of T), 
	ICollection(Of T), IEnumerable(Of T), IEnumerable, IAvaloniaReadOnlyList(Of T), 
	IReadOnlyList(Of T), IReadOnlyCollection(Of T), INotifyCollectionChanged, INotifyPropertyChanged, 
	IList, ICollection
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type AvaloniaList<'T> = 
    class
        interface IAvaloniaList<'T>
        interface IList<'T>
        interface ICollection<'T>
        interface IEnumerable<'T>
        interface IEnumerable
        interface IAvaloniaReadOnlyList<'T>
        interface IReadOnlyList<'T>
        interface IReadOnlyCollection<'T>
        interface INotifyCollectionChanged
        interface INotifyPropertyChanged
        interface IList
        interface ICollection
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/AvaloniaList.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaList(T)</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Animation_KeyFrames">Avalonia.Animation.KeyFrames</a><br /><a href="T_Avalonia_Animation_Transitions">Avalonia.Animation.Transitions</a><br /><a href="T_Avalonia_Collections_DataGridSortDescriptionCollection">Avalonia.Collections.DataGridSortDescriptionCollection</a><br /><a href="T_Avalonia_Controls_Classes">Avalonia.Controls.Classes</a><br /><a href="T_Avalonia_Controls_Controls">Avalonia.Controls.Controls</a><br /><a href="T_Avalonia_Controls_DefinitionList_1">Avalonia.Controls.DefinitionList(T)</a><br /><a href="T_Avalonia_Controls_Documents_InlineCollection">Avalonia.Controls.Documents.InlineCollection</a><br /><a href="T_Avalonia_Controls_Templates_DataTemplates">Avalonia.Controls.Templates.DataTemplates</a><br /><a href="T_Avalonia_Controls_TrayIcons">Avalonia.Controls.TrayIcons</a><br /><a href="T_Avalonia_Media_DrawingCollection">Avalonia.Media.DrawingCollection</a><br /><a href="T_Avalonia_Media_FontFeatureCollection">Avalonia.Media.FontFeatureCollection</a><br /><a href="T_Avalonia_Media_GeometryCollection">Avalonia.Media.GeometryCollection</a><br /><a href="T_Avalonia_Media_GradientStops">Avalonia.Media.GradientStops</a><br /><a href="T_Avalonia_Media_PathFigures">Avalonia.Media.PathFigures</a><br /><a href="T_Avalonia_Media_PathSegments">Avalonia.Media.PathSegments</a><br /><a href="T_Avalonia_Media_TextDecorationCollection">Avalonia.Media.TextDecorationCollection</a><br /><a href="T_Avalonia_Media_Transforms">Avalonia.Media.Transforms</a><br /><a href="T_Avalonia_Points">Avalonia.Points</a></td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Collections_IAvaloniaList_1">IAvaloniaList</a>(T), <a href="T_Avalonia_Collections_IAvaloniaReadOnlyList_1">IAvaloniaReadOnlyList</a>(T), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(T), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(T), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1" target="_blank" rel="noopener noreferrer">IList</a>(T), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection-1" target="_blank" rel="noopener noreferrer">IReadOnlyCollection</a>(T), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(T), <a href="https://learn.microsoft.com/dotnet/api/system.collections.icollection" target="_blank" rel="noopener noreferrer">ICollection</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.ilist" target="_blank" rel="noopener noreferrer">IList</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged" target="_blank" rel="noopener noreferrer">INotifyCollectionChanged</a>, <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifypropertychanged" target="_blank" rel="noopener noreferrer">INotifyPropertyChanged</a></td></tr>
</table>



#### Type Parameters
<dl><dt /><dd>The type of the list items.</dd></dl>

## Remarks

AvaloniaList is similar to <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection-1" target="_blank" rel="noopener noreferrer">ObservableCollection(T)</a> with a few added features:
<ul>It can be configured to notify the <a href="E_Avalonia_Collections_AvaloniaList_1_CollectionChanged">CollectionChanged</a> event with a <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedaction#system-collections-specialized-notifycollectionchangedaction-remove" target="_blank" rel="noopener noreferrer">Remove</a> action instead of a <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedaction#system-collections-specialized-notifycollectionchangedaction-reset" target="_blank" rel="noopener noreferrer">Reset</a> when the list is cleared by setting <a href="P_Avalonia_Collections_AvaloniaList_1_ResetBehavior">ResetBehavior</a> to <a href="T_Avalonia_Collections_ResetBehavior">Remove</a>.A <a href="P_Avalonia_Collections_AvaloniaList_1_Validate">Validate</a> function can be used to validate each item before insertion.</ul>

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1__ctor">AvaloniaList(T)()</a></td>
<td>Initializes a new instance of the AvaloniaList(T) class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1__ctor_3">AvaloniaList(T)(T[])</a></td>
<td>Initializes a new instance of the AvaloniaList(T) class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1__ctor_1">AvaloniaList(T)(IEnumerable(T))</a></td>
<td>Initializes a new instance of the AvaloniaList(T) class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1__ctor_2">AvaloniaList(T)(Int32)</a></td>
<td>Initializes a new instance of the AvaloniaList(T).</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Collections_AvaloniaList_1_Capacity">Capacity</a></td>
<td>Gets or sets the total number of elements the internal data structure can hold without resizing.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_AvaloniaList_1_Count">Count</a></td>
<td>Gets the number of items in the collection.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_AvaloniaList_1_Item">Item(Int32)</a></td>
<td>Gets or sets the item at the specified index.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_AvaloniaList_1_ResetBehavior">ResetBehavior</a></td>
<td>Gets or sets the reset behavior of the list.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Collections_AvaloniaList_1_Validate">Validate</a></td>
<td>Gets or sets a validation routine that can be used to validate items before they are added.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_Add">Add(T)</a></td>
<td>Adds an item to the collection.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_AddRange">AddRange(IEnumerable(T))</a></td>
<td>Adds multiple items to the collection.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_Clear">Clear()</a></td>
<td>Removes all items from the collection.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_Contains">Contains(T)</a></td>
<td>Tests if the collection contains the specified item.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_CopyTo">CopyTo(T[], Int32)</a></td>
<td>Copies the collection's contents to an array.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_EnsureCapacity">EnsureCapacity(Int32)</a></td>
<td>Ensures that the capacity of the list is at least <a href="P_Avalonia_Collections_AvaloniaList_1_Capacity">Capacity</a>.</td>
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
<td><a href="M_Avalonia_Collections_AvaloniaList_1_GetEnumerator">GetEnumerator()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_GetRange">GetRange(Int32, Int32)</a></td>
<td>Gets a range of items from the collection.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_IndexOf">IndexOf(T)</a></td>
<td>Gets the index of the specified item in the collection.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_Insert">Insert(Int32, T)</a></td>
<td>Inserts an item at the specified index.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_InsertRange">InsertRange(Int32, IEnumerable(T))</a></td>
<td>Inserts multiple items at the specified index.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_Move">Move(Int32, Int32)</a></td>
<td>Moves an item to a new index.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_MoveRange">MoveRange(Int32, Int32, Int32)</a></td>
<td>Moves multiple items to a new index.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_Remove">Remove(T)</a></td>
<td>Removes an item from the collection.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_RemoveAll">RemoveAll(IEnumerable(T))</a></td>
<td>Removes multiple items from the collection.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_RemoveAt">RemoveAt(Int32)</a></td>
<td>Removes the item at the specified index.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaList_1_RemoveRange">RemoveRange(Int32, Int32)</a></td>
<td>Removes a range of elements from the collection.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Collections_AvaloniaList_1_CollectionChanged">CollectionChanged</a></td>
<td>Raised when a change is made to the collection's items.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Collections_AvaloniaList_1_PropertyChanged">PropertyChanged</a></td>
<td>Raised when a property on the collection changes.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaListExtensions_ForEachItem__1">ForEachItem(T)(Action(T), Action(T), Action, Boolean)</a></td>
<td>Invokes an action for each item in a collection and subsequently each item added or removed from the collection.<br />(Defined by <a href="T_Avalonia_Collections_AvaloniaListExtensions">AvaloniaListExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaListExtensions_ForEachItem__1_1">ForEachItem(T)(Action(Int32, T), Action(Int32, T), Action, Boolean)</a></td>
<td>Invokes an action for each item in a collection and subsequently each item added or removed from the collection.<br />(Defined by <a href="T_Avalonia_Collections_AvaloniaListExtensions">AvaloniaListExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_NotifyCollectionChangedExtensions_GetWeakCollectionChangedObservable">GetWeakCollectionChangedObservable()</a></td>
<td>Gets a weak observable for the CollectionChanged event.<br />(Defined by <a href="T_Avalonia_Collections_NotifyCollectionChangedExtensions">NotifyCollectionChangedExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_AvaloniaListExtensions_TrackItemPropertyChanged__1">TrackItemPropertyChanged(T)(Action(Tuple(Object, PropertyChangedEventArgs)))</a></td>
<td>Listens for property changed events from all items in a collection.<br />(Defined by <a href="T_Avalonia_Collections_AvaloniaListExtensions">AvaloniaListExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_NotifyCollectionChangedExtensions_WeakSubscribe">WeakSubscribe(Action(NotifyCollectionChangedEventArgs))</a></td>
<td>Subscribes to the CollectionChanged event using a weak subscription.<br />(Defined by <a href="T_Avalonia_Collections_NotifyCollectionChangedExtensions">NotifyCollectionChangedExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Collections_NotifyCollectionChangedExtensions_WeakSubscribe_1">WeakSubscribe(NotifyCollectionChangedEventHandler)</a></td>
<td>Subscribes to the CollectionChanged event using a weak subscription.<br />(Defined by <a href="T_Avalonia_Collections_NotifyCollectionChangedExtensions">NotifyCollectionChangedExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

