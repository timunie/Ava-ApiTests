# GetContainerFromEventSource Method


Tries to get the container that was the source of an event.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected Control? GetContainerFromEventSource(
	Object? eventSource
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Function GetContainerFromEventSource ( 
	eventSource As Object
) As Control
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetContainerFromEventSource : 
        eventSource : Object -> Control 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/SelectingItemsControl.cs#L436" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The control that raised the event.</dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Control">Control</a>  
The container or null if the event did not originate in a container.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_SelectingItemsControl">SelectingItemsControl Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

