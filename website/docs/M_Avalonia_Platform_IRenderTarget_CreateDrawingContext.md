# CreateDrawingContext Method


Creates an <a href="T_Avalonia_Platform_IDrawingContextImpl">IDrawingContextImpl</a> for a rendering session.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IDrawingContextImpl CreateDrawingContext(
	bool useScaledDrawing
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function CreateDrawingContext ( 
	useScaledDrawing As Boolean
) As IDrawingContextImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CreateDrawingContext : 
        useScaledDrawing : bool -> IDrawingContextImpl 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IRenderTarget.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>Apply DPI reported by the render target as a hidden transform matrix</dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IDrawingContextImpl">IDrawingContextImpl</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IRenderTarget">IRenderTarget Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
