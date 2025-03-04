import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# OnItemsChanged Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override void OnItemsChanged(
	IReadOnlyList<Object?> items,
	NotifyCollectionChangedEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Sub OnItemsChanged ( 
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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/VirtualizingStackPanel.cs#L257" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventargs" target="_blank" rel="noopener noreferrer">NotifyCollectionChangedEventArgs</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_VirtualizingStackPanel">VirtualizingStackPanel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
