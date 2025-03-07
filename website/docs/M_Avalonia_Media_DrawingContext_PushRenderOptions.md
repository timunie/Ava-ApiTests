# PushRenderOptions Method


Pushes render options.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DrawingContext.PushedState PushRenderOptions(
	RenderOptions renderOptions
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function PushRenderOptions ( 
	renderOptions As RenderOptions
) As DrawingContext.PushedState
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member PushRenderOptions : 
        renderOptions : RenderOptions -> DrawingContext.PushedState 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/DrawingContext.cs#L412" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_RenderOptions">RenderOptions</a></dt><dd>The render options.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_DrawingContext_PushedState">DrawingContext.PushedState</a>  
A disposable to undo the render options.

## See Also


#### Reference
<a href="T_Avalonia_Media_DrawingContext">DrawingContext Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
