# PushOpacity Method


Pushes an opacity value.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DrawingContext.PushedState PushOpacity(
	double opacity
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function PushOpacity ( 
	opacity As Double
) As DrawingContext.PushedState
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member PushOpacity : 
        opacity : float -> DrawingContext.PushedState 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/DrawingContext.cs#L369" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The opacity.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_DrawingContext_PushedState">DrawingContext.PushedState</a>  
A disposable used to undo the opacity.

## See Also


#### Reference
<a href="T_Avalonia_Media_DrawingContext">DrawingContext Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

