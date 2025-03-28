# GetMaxTextWidths Method


Obtains a copy of the array of lengths, which will be applied to each line of text in turn. If the text covers more lines than there are entries in the length array, the last entry is reused as many times as required. The maxTextWidths array overrides the MaxTextWidth property.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public double[] GetMaxTextWidths()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetMaxTextWidths As Double()
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetMaxTextWidths : unit -> float[] 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/FormattedText.cs#L1132" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>[]  
The copy of max text width array

## See Also


#### Reference
<a href="T_Avalonia_Media_FormattedText">FormattedText Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

