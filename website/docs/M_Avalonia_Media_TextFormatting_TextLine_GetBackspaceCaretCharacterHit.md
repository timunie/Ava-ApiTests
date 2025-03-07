# GetBackspaceCaretCharacterHit Method


Gets the previous character hit after backspacing.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract CharacterHit GetBackspaceCaretCharacterHit(
	CharacterHit characterHit
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustOverride Function GetBackspaceCaretCharacterHit ( 
	characterHit As CharacterHit
) As CharacterHit
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetBackspaceCaretCharacterHit : 
        characterHit : CharacterHit -> CharacterHit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextLine.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_CharacterHit">CharacterHit</a></dt><dd>The current <a href="T_Avalonia_Media_CharacterHit">CharacterHit</a>.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_CharacterHit">CharacterHit</a>  
The <a href="T_Avalonia_Media_CharacterHit">CharacterHit</a> after backspacing.

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_TextLine">TextLine Class</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
