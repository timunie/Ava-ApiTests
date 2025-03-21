# SetMaxTextWidths Method


Sets the array of lengths, which will be applied to each line of text in turn. If the text covers more lines than there are entries in the length array, the last entry is reused as many times as required. The maxTextWidths array overrides the MaxTextWidth property.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void SetMaxTextWidths(
	double[] maxTextWidths
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub SetMaxTextWidths ( 
	maxTextWidths As Double()
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member SetMaxTextWidths : 
        maxTextWidths : float[] -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/FormattedText.cs#L1112" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>[]</dt><dd>The max text width array</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_FormattedText">FormattedText Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

