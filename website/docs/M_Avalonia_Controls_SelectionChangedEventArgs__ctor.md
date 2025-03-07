# SelectionChangedEventArgs Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_SelectionChangedEventArgs">SelectionChangedEventArgs</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public SelectionChangedEventArgs(
	RoutedEvent routedEvent,
	IList removedItems,
	IList addedItems
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	routedEvent As RoutedEvent,
	removedItems As IList,
	addedItems As IList
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        routedEvent : RoutedEvent * 
        removedItems : IList * 
        addedItems : IList -> SelectionChangedEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/SelectionChangedEventArgs.cs#L19" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a></dt><dd>The event being raised.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.ilist" target="_blank" rel="noopener noreferrer">IList</a></dt><dd>The items removed from the selection.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.ilist" target="_blank" rel="noopener noreferrer">IList</a></dt><dd>The items added to the selection.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_SelectionChangedEventArgs">SelectionChangedEventArgs Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
