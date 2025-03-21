# GetNextCaretCharacterHit Method


Retrieves the next valid caret character hit in the logical direction in the <a href="T_Avalonia_Media_GlyphRun">GlyphRun</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public CharacterHit GetNextCaretCharacterHit(
	CharacterHit characterHit
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetNextCaretCharacterHit ( 
	characterHit As CharacterHit
) As CharacterHit
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetNextCaretCharacterHit : 
        characterHit : CharacterHit -> CharacterHit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/GlyphRun.cs#L403" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_CharacterHit">CharacterHit</a></dt><dd>The <a href="T_Avalonia_Media_CharacterHit">CharacterHit</a> to use for computing the next hit value.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_CharacterHit">CharacterHit</a>  
A <a href="T_Avalonia_Media_CharacterHit">CharacterHit</a> that represents the next valid caret character hit in the logical direction. If the return value is equal to `characterHit`, no further navigation is possible in the <a href="T_Avalonia_Media_GlyphRun">GlyphRun</a>.

## See Also


#### Reference
<a href="T_Avalonia_Media_GlyphRun">GlyphRun Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

