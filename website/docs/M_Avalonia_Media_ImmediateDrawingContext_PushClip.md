# PushClip(Rect) Method


Pushes a clip rectangle.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ImmediateDrawingContext.PushedState PushClip(
	Rect clip
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function PushClip ( 
	clip As Rect
) As ImmediateDrawingContext.PushedState
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member PushClip : 
        clip : Rect -> ImmediateDrawingContext.PushedState 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/ImmediateDrawingContext.cs#L278" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The clip rectangle.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_ImmediateDrawingContext_PushedState">ImmediateDrawingContext.PushedState</a>  
A disposable used to undo the clip rectangle.

## See Also


#### Reference
<a href="T_Avalonia_Media_ImmediateDrawingContext">ImmediateDrawingContext Class</a>  
<a href="Overload_Avalonia_Media_ImmediateDrawingContext_PushClip">PushClip Overload</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
