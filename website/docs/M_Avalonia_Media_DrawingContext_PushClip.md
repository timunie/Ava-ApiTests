# PushClip(Rect) Method


Pushes a clip rectangle.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DrawingContext.PushedState PushClip(
	Rect clip
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function PushClip ( 
	clip As Rect
) As DrawingContext.PushedState
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member PushClip : 
        clip : Rect -> DrawingContext.PushedState 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/DrawingContext.cs#L339" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The clip rectangle.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_DrawingContext_PushedState">DrawingContext.PushedState</a>  
A disposable used to undo the clip rectangle.

## See Also


#### Reference
<a href="T_Avalonia_Media_DrawingContext">DrawingContext Class</a>  
<a href="Overload_Avalonia_Media_DrawingContext_PushClip">PushClip Overload</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

