# GetCharacterHitFromDistance Method


Retrieves the <a href="T_Avalonia_Media_CharacterHit">CharacterHit</a> value that represents the character hit of the caret of the <a href="T_Avalonia_Media_GlyphRun">GlyphRun</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public CharacterHit GetCharacterHitFromDistance(
	double distance,
	out bool isInside
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetCharacterHitFromDistance ( 
	distance As Double,
	<OutAttribute> ByRef isInside As Boolean
) As CharacterHit
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetCharacterHitFromDistance : 
        distance : float * 
        isInside : bool byref -> CharacterHit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/GlyphRun.cs#L317" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>Offset to use for computing the caret character hit.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>Determines whether the character hit is inside the <a href="T_Avalonia_Media_GlyphRun">GlyphRun</a>.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_CharacterHit">CharacterHit</a>  
A <a href="T_Avalonia_Media_CharacterHit">CharacterHit</a> value that represents the character hit that is closest to the distance value. The out parameter `isInside` returns `true` if the character hit is inside the <a href="T_Avalonia_Media_GlyphRun">GlyphRun</a>; otherwise, `false`.

## See Also


#### Reference
<a href="T_Avalonia_Media_GlyphRun">GlyphRun Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

