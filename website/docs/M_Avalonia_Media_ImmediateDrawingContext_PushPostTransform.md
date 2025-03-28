# PushPostTransform Method


Pushes a matrix post-transformation.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ImmediateDrawingContext.PushedState PushPostTransform(
	Matrix matrix
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function PushPostTransform ( 
	matrix As Matrix
) As ImmediateDrawingContext.PushedState
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member PushPostTransform : 
        matrix : Matrix -> ImmediateDrawingContext.PushedState 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/ImmediateDrawingContext.cs#L315" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Matrix">Matrix</a></dt><dd>The matrix</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_ImmediateDrawingContext_PushedState">ImmediateDrawingContext.PushedState</a>  
A disposable used to undo the transformation.

## See Also


#### Reference
<a href="T_Avalonia_Media_ImmediateDrawingContext">ImmediateDrawingContext Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

