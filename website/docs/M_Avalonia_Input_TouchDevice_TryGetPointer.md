# TryGetPointer Method




## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IPointer? TryGetPointer(
	RawPointerEventArgs ev
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TryGetPointer ( 
	ev As RawPointerEventArgs
) As IPointer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryGetPointer : 
        ev : RawPointerEventArgs -> IPointer 
override TryGetPointer : 
        ev : RawPointerEventArgs -> IPointer 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/TouchDevice.cs#L158" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_Raw_RawPointerEventArgs">RawPointerEventArgs</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Input_IPointer">IPointer</a>

#### Implements
<a href="M_Avalonia_Input_IPointerDevice_TryGetPointer">IPointerDevice.TryGetPointer(RawPointerEventArgs)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Input_TouchDevice">TouchDevice Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
