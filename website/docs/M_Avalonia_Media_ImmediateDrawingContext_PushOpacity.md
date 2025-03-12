# PushOpacity Method


Pushes an opacity value.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ImmediateDrawingContext.PushedState PushOpacity(
	double opacity,
	Rect bounds
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function PushOpacity ( 
	opacity As Double,
	bounds As Rect
) As ImmediateDrawingContext.PushedState
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member PushOpacity : 
        opacity : float * 
        bounds : Rect -> ImmediateDrawingContext.PushedState 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/ImmediateDrawingContext.cs#L292" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The opacity.</dd><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The bounds.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_ImmediateDrawingContext_PushedState">ImmediateDrawingContext.PushedState</a>  
A disposable used to undo the opacity.

## See Also


#### Reference
<a href="T_Avalonia_Media_ImmediateDrawingContext">ImmediateDrawingContext Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

