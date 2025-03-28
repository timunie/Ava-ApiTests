# GetRegistered&lt;TOwner&gt; Method


Returns all routed events registered with the provided type. If the type is not found or does not provide any routed events, an empty list is returned.



## Definition
**Namespace:** <a href="N_Avalonia_Interactivity">Avalonia.Interactivity</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IReadOnlyList<RoutedEvent> GetRegistered<TOwner>()

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetRegistered(Of TOwner) As IReadOnlyList(Of RoutedEvent)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetRegistered : unit -> IReadOnlyList<RoutedEvent> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Interactivity/RoutedEventRegistry.cs#L84" title="View the source code">View Source</a>



#### Type Parameters
<dl><dt /><dd>The type.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a>)  
All routed events registered with the provided type.

## See Also


#### Reference
<a href="T_Avalonia_Interactivity_RoutedEventRegistry">RoutedEventRegistry Class</a>  
<a href="Overload_Avalonia_Interactivity_RoutedEventRegistry_GetRegistered">GetRegistered Overload</a>  
<a href="N_Avalonia_Interactivity">Avalonia.Interactivity Namespace</a>  

