# Key Property



Gets the virtual-key for the associated event.  
 A given physical key can result in different virtual keys depending on the current keyboard layout.  
 This is the key that is generally referred to when creating keyboard shortcuts.

For example, when pressing the key located at the `Z` position on standard US English QWERTY keyboard, this property returns:  
 - <a href="T_Avalonia_Input_Key">Z</a> for an English (QWERTY) layout  
 - <a href="T_Avalonia_Input_Key">W</a> for a French (AZERTY) layout  
 - <a href="T_Avalonia_Input_Key">Y</a> for a German (QWERTZ) layout  
 - <a href="T_Avalonia_Input_Key">Z</a> for a Russian (JCUKEN) layout




## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Key Key \{ get; init; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property Key As Key
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Key : Key with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/KeyEventArgs.cs#L34" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Input_Key">Key</a>This property should be used for letter-related shortcuts only.  
 Prefer using <a href="P_Avalonia_Input_KeyEventArgs_PhysicalKey">PhysicalKey</a> if you need to refer to a key given its position on the keyboard (a common usage is moving the player with WASD-like keys in games), or <a href="P_Avalonia_Input_KeyEventArgs_KeySymbol">KeySymbol</a> if you want to know which character the key will output.  
 Avoid using this for shortcuts related to punctuation keys, as they differ wildly depending on keyboard layouts.

## See Also


#### Reference
<a href="T_Avalonia_Input_KeyEventArgs">KeyEventArgs Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
<a href="P_Avalonia_Input_KeyEventArgs_PhysicalKey">PhysicalKey</a>  
<a href="P_Avalonia_Input_KeyEventArgs_KeySymbol">KeySymbol</a>  
