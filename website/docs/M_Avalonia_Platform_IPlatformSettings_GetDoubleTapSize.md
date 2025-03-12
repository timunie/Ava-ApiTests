# GetDoubleTapSize Method


The size of the rectangle around the location of a pointer down that a pointer up must occur within in order to register a double-tap gesture, in device-independent pixels.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Size GetDoubleTapSize(
	PointerType type
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function GetDoubleTapSize ( 
	type As PointerType
) As Size
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetDoubleTapSize : 
        type : PointerType -> Size 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IPlatformSettings.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_PointerType">PointerType</a></dt><dd>The pointer type.</dd></dl>

#### Return Value
<a href="T_Avalonia_Size">Size</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformSettings">IPlatformSettings Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

