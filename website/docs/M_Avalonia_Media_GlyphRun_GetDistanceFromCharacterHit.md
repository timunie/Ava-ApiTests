# GetDistanceFromCharacterHit Method


Retrieves the offset from the leading edge of the <a href="T_Avalonia_Media_GlyphRun">GlyphRun</a> to the leading or trailing edge of a caret stop containing the specified character hit.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public double GetDistanceFromCharacterHit(
	CharacterHit characterHit
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetDistanceFromCharacterHit ( 
	characterHit As CharacterHit
) As Double
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetDistanceFromCharacterHit : 
        characterHit : CharacterHit -> float 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/GlyphRun.cs#L244" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_CharacterHit">CharacterHit</a></dt><dd>The <a href="T_Avalonia_Media_CharacterHit">CharacterHit</a> to use for computing the offset.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  
A <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a> that represents the offset from the leading edge of the <a href="T_Avalonia_Media_GlyphRun">GlyphRun</a> to the leading or trailing edge of a caret stop containing the character hit.

## See Also


#### Reference
<a href="T_Avalonia_Media_GlyphRun">GlyphRun Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
