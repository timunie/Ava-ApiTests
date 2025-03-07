# Avalonia.Controls.Converters Namespace






## Classes
<table>
<tr>
<td><a href="T_Avalonia_Controls_Converters_ColorToDisplayNameConverter">ColorToDisplayNameConverter</a></td>
<td>Gets the approximated display name for the color.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Controls_Converters_ColorToHexConverter">ColorToHexConverter</a></td>
<td>Converts a color to a hex string and vice versa.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Controls_Converters_CornerRadiusFilterConverter">CornerRadiusFilterConverter</a></td>
<td>Converts an existing CornerRadius struct to a new CornerRadius struct, with filters applied to extract only the specified corners, leaving the others set to 0.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Controls_Converters_CornerRadiusToDoubleConverter">CornerRadiusToDoubleConverter</a></td>
<td>Converts one corner of a <a href="T_Avalonia_CornerRadius">CornerRadius</a> to its double value.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Controls_Converters_DoNothingForNullConverter">DoNothingForNullConverter</a></td>
<td>Converter that will do nothing (not update bound values) when a null value is encountered. This converter enables binding nullable with non-nullable properties in some scenarios.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Controls_Converters_EnumToBoolConverter">EnumToBoolConverter</a></td>
<td>Converter to convert an enum value to bool by comparing to the given parameter. Both value and parameter must be of the same enum type.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Controls_Converters_MarginMultiplierConverter">MarginMultiplierConverter</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Controls_Converters_MenuScrollingVisibilityConverter">MenuScrollingVisibilityConverter</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Controls_Converters_PlatformKeyGestureConverter">PlatformKeyGestureConverter</a></td>
<td>Converts a <a href="T_Avalonia_Input_KeyGesture">KeyGesture</a> to a string, formatting it according to the current platform's style guidelines.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Controls_Converters_StringFormatConverter">StringFormatConverter</a></td>
<td>Calls <a href="https://learn.microsoft.com/dotnet/api/system.string.format#system-string-format(system-string-system-object())" target="_blank" rel="noopener noreferrer">Format(String, Object[])</a> on the passed in values, where the first element in the list is the string, and everything after it is passed into the object array in order.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Controls_Converters_ToBrushConverter">ToBrushConverter</a></td>
<td>Converts the given value into an <a href="T_Avalonia_Media_IBrush">IBrush</a> when a conversion is possible.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Controls_Converters_ToColorConverter">ToColorConverter</a></td>
<td>Converts the given value into a <a href="T_Avalonia_Media_Color">Color</a> when a conversion is possible.</td>
</tr>
</table>

## Enumerations
<table>
<tr>
<td><a href="T_Avalonia_Controls_Converters_Corners">Corners</a></td>
<td>Defines constants that specify one or more corners of a <a href="T_Avalonia_CornerRadius">CornerRadius</a>.</td>
</tr>
</table>