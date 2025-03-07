# TryGetPointer Method


Gets a pointer for specific event args.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IPointer? TryGetPointer(
	RawPointerEventArgs ev
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function TryGetPointer ( 
	ev As RawPointerEventArgs
) As IPointer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryGetPointer : 
        ev : RawPointerEventArgs -> IPointer 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/IPointerDevice.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_Raw_RawPointerEventArgs">RawPointerEventArgs</a></dt><dd>Raw pointer event args associated with the pointer.</dd></dl>

#### Return Value
<a href="T_Avalonia_Input_IPointer">IPointer</a>  
The pointer.If pointer doesn't exist or wasn't yet created this method will return null.

## See Also


#### Reference
<a href="T_Avalonia_Input_IPointerDevice">IPointerDevice Interface</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
