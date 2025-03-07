# Pressure Property


Gets a value that indicates the force that the pointer device (typically a pen/stylus) exerts on the surface of the digitizer.



## Definition
**Namespace:** <a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public float Pressure \{
	get;
 set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property Pressure As Single
		Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Pressure : float32 with 
		get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/Raw/RawPointerEventArgs.cs#L140" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">Single</a>  
A value from 0 to 1.0. The default value is 0.5.

## See Also


#### Reference
<a href="T_Avalonia_Input_Raw_RawPointerPoint">RawPointerPoint Structure</a>  
<a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw Namespace</a>  
