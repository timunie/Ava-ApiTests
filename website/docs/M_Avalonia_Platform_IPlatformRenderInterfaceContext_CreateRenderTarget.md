# CreateRenderTarget Method


Creates a renderer.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IRenderTarget CreateRenderTarget(
	IEnumerable<Object> surfaces
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function CreateRenderTarget ( 
	surfaces As IEnumerable(Of Object)
) As IRenderTarget
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CreateRenderTarget : 
        surfaces : IEnumerable<Object> -> IRenderTarget 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd>The list of native platform surfaces that can be used for output.</dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IRenderTarget">IRenderTarget</a>  
An <a href="T_Avalonia_Platform_IRenderTarget">IRenderTarget</a>.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterfaceContext">IPlatformRenderInterfaceContext Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
