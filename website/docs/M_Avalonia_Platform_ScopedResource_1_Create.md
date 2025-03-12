# Create Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IScopedResource<T> Create(
	T value,
	Action dispose
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function Create ( 
	value As T,
	dispose As Action
) As IScopedResource(Of T)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member Create : 
        value : 'T * 
        dispose : Action -> IScopedResource<'T> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IScopedResource.cs#L22" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_ScopedResource_1">T</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IScopedResource_1">IScopedResource</a>(<a href="T_Avalonia_Platform_ScopedResource_1">T</a>)

## See Also


#### Reference
<a href="T_Avalonia_Platform_ScopedResource_1">ScopedResource(T) Class</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

