# PushOpacityMask Method


Pushes an opacity mask.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DrawingContext.PushedState PushOpacityMask(
	IBrush mask,
	Rect bounds
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function PushOpacityMask ( 
	mask As IBrush,
	bounds As Rect
) As DrawingContext.PushedState
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member PushOpacityMask : 
        mask : IBrush * 
        bounds : Rect -> DrawingContext.PushedState 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/DrawingContext.cs#L386" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IBrush">IBrush</a></dt><dd>The opacity mask.</dd><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The size of the brush's target area. TODO: Are we sure this is needed?</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_DrawingContext_PushedState">DrawingContext.PushedState</a>  
A disposable to undo the opacity mask.

## See Also


#### Reference
<a href="T_Avalonia_Media_DrawingContext">DrawingContext Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

