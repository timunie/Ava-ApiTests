# Deconstruct Method


Deconstructs the split results into its components.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Deconstruct(
	out T first,
	out T? second
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Deconstruct ( 
	<OutAttribute> ByRef first As T,
	<OutAttribute> ByRef second As T
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Deconstruct : 
        first : 'T byref * 
        second : 'T byref -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/SplitResult.cs#L37" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_TextFormatting_SplitResult_1">T</a></dt><dd>On return, contains the first part.</dd><dt>  <a href="T_Avalonia_Media_TextFormatting_SplitResult_1">T</a></dt><dd>On return, contains the second part.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_SplitResult_1">SplitResult(T) Structure</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  

