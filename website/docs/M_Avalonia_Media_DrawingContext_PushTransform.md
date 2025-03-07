# PushTransform Method


Pushes a matrix transformation.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DrawingContext.PushedState PushTransform(
	Matrix matrix
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function PushTransform ( 
	matrix As Matrix
) As DrawingContext.PushedState
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member PushTransform : 
        matrix : Matrix -> DrawingContext.PushedState 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/DrawingContext.cs#L399" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Matrix">Matrix</a></dt><dd>The matrix</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_DrawingContext_PushedState">DrawingContext.PushedState</a>  
A disposable used to undo the transformation.

## See Also


#### Reference
<a href="T_Avalonia_Media_DrawingContext">DrawingContext Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
