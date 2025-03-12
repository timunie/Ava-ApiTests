# GetDistanceFromCharacterHit Method


Gets the distance from the beginning of the line to the specified character hit. <a href="T_Avalonia_Media_CharacterHit">CharacterHit</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract double GetDistanceFromCharacterHit(
	CharacterHit characterHit
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustOverride Function GetDistanceFromCharacterHit ( 
	characterHit As CharacterHit
) As Double
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetDistanceFromCharacterHit : 
        characterHit : CharacterHit -> float 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextLine.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_CharacterHit">CharacterHit</a></dt><dd>The <a href="T_Avalonia_Media_CharacterHit">CharacterHit</a> object whose distance you want to query.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  
A <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a> that represents the distance from the beginning of the line.

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_TextLine">TextLine Class</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  

