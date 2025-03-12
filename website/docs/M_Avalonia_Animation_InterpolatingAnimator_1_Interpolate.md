# Interpolate Method




## Definition
**Namespace:** <a href="N_Avalonia_Animation">Avalonia.Animation</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract T Interpolate(
	double progress,
	T oldValue,
	T newValue
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustOverride Function Interpolate ( 
	progress As Double,
	oldValue As T,
	newValue As T
) As T
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Interpolate : 
        progress : float * 
        oldValue : 'T * 
        newValue : 'T -> 'T 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Animation_InterpolatingAnimator_1">T</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Animation_InterpolatingAnimator_1">T</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Animation_InterpolatingAnimator_1">T</a>

## See Also


#### Reference
<a href="T_Avalonia_Animation_InterpolatingAnimator_1">InterpolatingAnimator(T) Class</a>  
<a href="N_Avalonia_Animation">Avalonia.Animation Namespace</a>  

