# OnItemsChanged Method


Called when the <a href="P_Avalonia_Controls_ItemsControl_Items">Items</a> collection of the owner <a href="P_Avalonia_Controls_VirtualizingPanel_ItemsControl">ItemsControl</a> changes.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnItemsChanged(
	IReadOnlyList<Object?> items,
	NotifyCollectionChangedEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnItemsChanged ( 
	items As IReadOnlyList(Of Object),
	e As NotifyCollectionChangedEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnItemsChanged : 
        items : IReadOnlyList<Object> * 
        e : NotifyCollectionChangedEventArgs -> unit 
override OnItemsChanged : 
        items : IReadOnlyList<Object> * 
        e : NotifyCollectionChangedEventArgs -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/VirtualizingPanel.cs#L134" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd>The items.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventargs" target="_blank" rel="noopener noreferrer">NotifyCollectionChangedEventArgs</a></dt><dd>The event args.</dd></dl>This method is called a <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged" target="_blank" rel="noopener noreferrer">INotifyCollectionChanged</a> event is raised by the items, or when the <a href="P_Avalonia_Controls_ItemsControl_Items">Items</a> property is assigned a new collection, in which case the <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedaction" target="_blank" rel="noopener noreferrer">NotifyCollectionChangedAction</a> will be <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedaction#system-collections-specialized-notifycollectionchangedaction-reset" target="_blank" rel="noopener noreferrer">Reset</a>.

## See Also


#### Reference
<a href="T_Avalonia_Controls_VirtualizingPanel">VirtualizingPanel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

