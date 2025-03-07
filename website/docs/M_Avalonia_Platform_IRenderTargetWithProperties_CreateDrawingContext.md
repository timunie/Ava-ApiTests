# CreateDrawingContext(Boolean, RenderTargetDrawingContextProperties) Method


Creates an <a href="T_Avalonia_Platform_IDrawingContextImpl">IDrawingContextImpl</a> for a rendering session.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IDrawingContextImpl CreateDrawingContext(
	bool useScaledDrawing,
	out RenderTargetDrawingContextProperties properties
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function CreateDrawingContext ( 
	useScaledDrawing As Boolean,
	<OutAttribute> ByRef properties As RenderTargetDrawingContextProperties
) As IDrawingContextImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CreateDrawingContext : 
        useScaledDrawing : bool * 
        properties : RenderTargetDrawingContextProperties byref -> IDrawingContextImpl 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>Apply DPI reported by the render target as a hidden transform matrix</dd><dt>  <a href="T_Avalonia_Platform_RenderTargetDrawingContextProperties">RenderTargetDrawingContextProperties</a></dt><dd>Returns various properties about the returned drawing context</dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IDrawingContextImpl">IDrawingContextImpl</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IRenderTargetWithProperties">IRenderTargetWithProperties Interface</a>  
<a href="Overload_Avalonia_Platform_IRenderTargetWithProperties_CreateDrawingContext">CreateDrawingContext Overload</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
