# GetPreviousCaretCharacterHit Method


Retrieves the previous valid caret character hit in the logical direction in the <a href="T_Avalonia_Media_GlyphRun">GlyphRun</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public CharacterHit GetPreviousCaretCharacterHit(
	CharacterHit characterHit
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetPreviousCaretCharacterHit ( 
	characterHit As CharacterHit
) As CharacterHit
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetPreviousCaretCharacterHit : 
        characterHit : CharacterHit -> CharacterHit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/GlyphRun.cs#L430" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_CharacterHit">CharacterHit</a></dt><dd>The <a href="T_Avalonia_Media_CharacterHit">CharacterHit</a> to use for computing the previous hit value.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_CharacterHit">CharacterHit</a>  
A cref="CharacterHit"/&gt; that represents the previous valid caret character hit in the logical direction. If the return value is equal to `characterHit`, no further navigation is possible in the <a href="T_Avalonia_Media_GlyphRun">GlyphRun</a>.

## See Also


#### Reference
<a href="T_Avalonia_Media_GlyphRun">GlyphRun Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

